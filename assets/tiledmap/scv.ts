
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;
    @property(cc.TiledMap)
    tiledMap: cc.TiledMap = null;
    @property(cc.TiledLayer)
    tiledLayer: cc.TiledLayer = null;
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Canvas)
    canvas: cc.Canvas = null;
    @property(cc.SpriteFrame)
    node1SpriteFrame: cc.SpriteFrame = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.scrollView01 = this.scrollView;
        cc.tiledMap01 = this.tiledMap;
        cc.tiledLayer = this.tiledLayer;
        cc.camera01 = this.camera;
        cc.xml2 = require('xml2js')

        // 创建一个新节点
        let node1 = new cc.Node();
        node1.width = 400;
        node1.height = 200;
        cc.node1 = node1;
        // 然后把该节点的父节点设置为任意的 layer 节点
        node1.parent = this.tiledLayer.node;  
        // 最后添加 TiledTile 组件到该节点上，并返回 TiledTile 对象，就可以对 TiledTile 对象进行一系列操作
        let tiledTile = node1.addComponent(cc.TiledTile);
        tiledTile.x = 141;
        tiledTile.y = 142;
        
        tiledTile.enabled = true;
        let node1Sprite = node1.addComponent(cc.Sprite);
        node1Sprite.spriteFrame = this.node1SpriteFrame;
        node1Sprite.enabled = true;
    }

    start () {

    }

    // update (dt) {}
}
