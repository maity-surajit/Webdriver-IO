class BlazeMeter {

    get headerElements() {
        return $$("ul[data-region='header']>li[class*='menu-item']>span");
    }

     footerElement(position: number) {
        return $(`nav[id='block-blazemeter-footer']>ul[class*='menu']>li[class*='menu-item']>a[href*='product/']+ul>li:nth-of-type(${position})`)
    }

    get startTestingNowBtn() {
        return $("a[href='/signup']");
    }
}


module.exports = new BlazeMeter();