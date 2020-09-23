
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(this.scrollView)
    }

    start () {

    }

    // update (dt) {}
}
