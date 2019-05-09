<<<<<<< HEAD
# 插件介绍
用于将元素的事件（点击，触摸...）触发键盘事件。用于模拟移动端的手机 触摸事件来触发键盘事件。开始初始目的是为了 适配scratch项目 的虚拟手柄所使用。

## 背景 项目介绍
在网上找个很久也没找到对应的插件，要么功能不适配，要么功能太多插件太大。所以自己创建了一个非常简单的插件，但是功能很强大，不依赖任何组件。
源码并没有被压缩，大家可以根据需要 另外自行开发。

##  结构
lib文件夹  包含了核心方法
----------其中有两个方法
                1. createKeyEvent  用于给元素创建UIevnt事件并对应到键盘事件
                2. batchAddEvent   用于批量创建元素事件
test文件下 有用于测试的 html 直接浏览器打开测试
index.js  是运用在组件中入口文件

## Examples

******* 值得注意的是，我们一定要在页面上 先添加键盘的点击事件。

```js
<script src="create-evt.js"></script>
<script>
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }
        var handled = false;
        if (event.key !== undefined) {
            // Handle the event with KeyboardEvent.key and set handled true.
            if(event.key === " "){
                space.classList.add('active')
            }else if(event.key === 'a'){
                space.classList.remove('active')
            }
        } else if (event.keyIdentifier !== undefined) {
            // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
            console.log( 'event.keyIdentifier',event.keyIdentifier);
        } else if (event.keyCode !== undefined || event.which !== undefined) {
            // Handle the event with KeyboardEvent.keyCode and set handled true.
            if(event.keyCode === 32){
                space.classList.add('active')
            }else if(event.keyCode === 65){
                space.classList.remove('active')
            }
        }
        if (handled) {
            // Suppress "double action" if event handled
            event.preventDefault();
        }
    }, true);
    const space = document.querySelector('#aaa');
    const back = document.querySelector('#bb');

    // space.onclick = (e) => {
    //     createKeyEvent(space,'keydown',32," ")
    // };
    // back.onclick = (e) => {
    //     createKeyEvent(space,'keydown',65,'a')
    // };

    let aele = [
        {
            obj: space,
            keyCode: 32,
            key: " "
        },
        {
            obj: back,
            keyCode: 65,
            key: "a"
        }
    ];
    batchAddEvent(aele,'keydown')

/*
 * 实际上键盘keydown事件在移动端 模拟的的时候，并不会因为手指的离开，而触发 keyup事件。所以当你的需求有键盘事件keyup的时候。在移动端必须加上touchend事件。 前提是页面上有写好的 keyup事件
 * 当手指移出屏幕时，触发键盘弹起事件 （否则会一直触发keydown事件）
 */
    document.addEventListener('touchend',function (e) {
        setTimeout(function () {
            let obj = e.target || e.srcElement,className = obj.classList,arr=[];
            for(var i in className){
                arr.push(className[i])
            }
            if(arr.includes('arrow-up')){
                createKeyEvent(obj, 'keyup', 38, 'ArrowUp');
            }else if(arr.includes('arrow-down')){
                createKeyEvent(obj, 'keyup', 40, 'ArrowDown');
            }else if(arr.includes('arrow-left')){
                createKeyEvent(obj, 'keyup', 37, 'ArrowLeft');
            }else if(arr.includes('arrow-right')){
                createKeyEvent(obj, 'keyup', 39, 'ArrowRight');
            }else if(arr.includes('space')){
                createKeyEvent(obj, 'keyup', 32, " ");
            }
        },400)
    });

</script>

```

## Stability status: Locked

  [3]: https://www.npmjs.com/package/eletokeyboard
  [4]: https://github.com/Mz1326/eletokeyboard.git

##写在最后，如有使用中有任何不理解可以发邮件到我的邮箱1546860452@qq.com,如果有同学觉得好用请到github上点亮星星  谢谢。
=======
# eletokeyboard
这是一个将元素点击事件传递键盘的插件，通过它你可以模拟键盘事件，创建一个手机端也能玩的游戏手柄，创建它是因 为让用户可以在手机端 点击元素触发已经添加的键盘事件。
>>>>>>> 36eb13655da0a4bfefc0094731824341a1cf999c
