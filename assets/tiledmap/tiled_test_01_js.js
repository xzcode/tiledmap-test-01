

cc.Class({
    extends: cc.Component,

    properties: {
        tiledMap: cc.TiledMap,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        console.log(this.node);
        console.log(this.layer);
        console.log(this.tiledMap);

    },

    // update (dt) {},
});
