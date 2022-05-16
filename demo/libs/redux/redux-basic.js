const INIT_REDUX = '@@REDUX_INIT';

//参数列表
//reducer:
//initialState: 初始状态
//enhancer: 初始状态

const createStore = function(reducer, initialState, enhancer) {
  let state;
  let listeners = [];

  const store = {
    // 获取当前的state值
    getState: function() {
      return state;
    },
    //触发reducer并执行listeners中的每一个方法
    dispatch: function(action) {
      if(action && action.type) {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
      }
    },
    //将方法注册到listeners中，通过dispatch来触发
    subscribe: function(listener) {
      if(typeof listener === 'function') {
        listeners.push(listener);
      }
    },
  };

  if(initialState === undefined) {
    store.dispatch({type: INIT_REDUX});
  }

  if(typeof enhancer === 'function') {
    return enhancer(store);
  }

  return store;
};

function compose(...func) {
  if(func.length === 0) {
    return args => args;
  }

  if(func.length === 1) {
    return func[0];
  }

  //return funcs.reduce((a, b) => (...args) => a(b(...args)));
  return func.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
}

//对Store的dispatch进行增强
const applyMiddleware = function(...middleWares) {
  return store => {
    let chains = middleWares.map((middleWare) => {
      return middleWare(store);
    });

    //利用compose的能力将store.dispatch进行传入，内部将会调用dispatch
    //实现了增强dispatch的功能
    store.dispatch = compose(...chains)(store.dispatch);
    return store;
  };
};

const middleWare = function(store) {
  return function f1(dispatch) {
    return function f2(action) {
      dispatch(action);
    };
  };
};

function middleware1(store) {
  return function f1(dispatch) {
    return function f2(action) {
      console.log('1');
      dispatch(action);
      console.log('1');
    };
  };
}

function middleware2(store) {
  return function f1(dispatch) {
    return function f2(action) {
      console.log('2');
      dispatch(action);
      console.log('2');
    };
  };
}

applyMiddleware(middleware1, middleware2);

function combineReducers(reducers) {
  const availableKeys = [];
  const availableReducer = {};
  Object.keys(reducers).forEach((key) => {
    if(typeof reducers[key] === 'function') {
      availableKeys.push(key);
      availableReducer[key] = reducers[key];
    }
  });

  return function(state = {}, action) {
    const nextState = {};
    let hasChanged = false;
    availableKeys.forEach((key) => {
      nextState[key] = availableReducer[key](state[key], action);
      if(!hasChanged) {
        hasChanged = state[key] !== nextState[key];
      }
    });

    return hasChanged ? nextState : state;
  };
};

//它返回一个方法集合，直接调用来触发dispatch
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    dispatch(actionCreator.apply(this, arguments));
  };
}

function bindActionCreator(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  const boundActionCreators = {};
  Object.keys(actionCreators).forEach((key) => {
    let actionCreator = actionCreators[key];
    if(typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  });

  return boundActionCreators;
}

function getFormatTime() {
  const date = new Date();
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +
    ' ' + date.getMilliseconds();
}

export default function logger({getState}) {
  return next => action => {    /* eslint-disable no-console */
    console.group(`%caction %c${ action.type } %c${ getFormatTime() }`,
      'color: gray; font-weight: lighter;', 'inherit',
      'color: gray; font-weight: lighter;');    // console.time('time')
    console.log(`%cprev state`, 'color: #9E9E9E; font-weight: bold;',
      getState());
    console.log(`%caction    `, 'color: #03A9F4; font-weight: bold;', action);

    next(action);
    console.log(`%cnext state`, 'color: #4CAF50; font-weight: bold;',
      getState());    // console.timeEnd('time')
    console.groupEnd();
  };
}

//如果action是一个函数的话 就会
export default function thunk({getState}) {
  return next => action => {
    if(typeof action === 'function') {
      action(next, getState);
    } else {
      next(action);
    }
  };
}

