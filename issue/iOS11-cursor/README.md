## What is this?
iOS11 issue问题
在iOS11系统中发现在modal打开时，如果在mobile上进行输入操作时，发现光标的位置会发生偏移。

## Analysis

发生条件：
- 背景可以滚动存在双层滚动(如果modal打开时背景不能滚动，则不会出现该问题，这也是解决该问题的思路)

Gif：
![iOS11-cursor-issue](http://obqvt6b56.bkt.clouddn.com/JS-Issue-ios11-cursor.gif)

解决方案：
在Modal打开时，对背景层进行锁定，同时记录背景层的滚动位置
在Modal关闭时，对背景层进行解锁，重置背景层之前的位置

副作用：
在Modal打开时会发现一个有意思的事情就是滚动穿透，即：(滚动modal的同时也会影响背景层的滚动)
使用此方案时，在打开modal时会附带的将背景层的滚动禁止

## Feature

## Version

## Note
参考：
https://hackernoon.com/how-to-fix-the-ios-11-input-element-in-fixed-modals-bug-aaf66c7ba3f8
https://stackoverflow.com/questions/46339063/ios-11-safari-bootstrap-modal-text-area-outside-of-cursor

## Showcase

打开Demo: [iOS11-cursor](https://sialvsic.github.io/javascript-demo/iOS11-cursor/index.html)
