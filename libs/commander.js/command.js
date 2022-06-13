const program = require('commander');


// 通过绑定操作处理程序实现命令 (这里description的定义和 `.command` 是分开的)
// 返回新生成的命令(即该子命令)以供继续配置
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('source', source);
    console.log('destination', destination);
    console.log('clone command called');
  });

program.parse(process.argv);