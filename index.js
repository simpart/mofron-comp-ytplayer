/**
 * @file mofron-comp-ytplayer/index.js
 * @brief youtube player component for mofron
 * @license MIT
 */
const Player = require("youtube-player");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) yid parameter
     *                key-value: component config
     * @short yid
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("YTPlayer");
	    this.shortForm("yid","initParam");
            
	    /* init config */
	    this.confmng().add("yid", { type: "string" });
	    this.confmng().add("player", { type: "object" });
	    rhia.confmng().add("initParam", { type: "object" });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set video id
     * 
     * @type private
     */
    afterRender () {
        try {
	    let init = (null === this.initParam()) ? undefined : this.initParam(); 
            let player = Player(this.childDom().id(),init);
 	    player.loadVideoById(this.yid());
            this.player(player);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * youtube id seter/getter
     * 
     * @param (string) youtube id
     * @return (string) youtube id
     * @type parameter
     */
    yid (prm) {
        try {
            return this.confmng("yid", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * player object getter/setter
     * 
     * @param (object) player object
     * @return (object) player object
     * @type parameter
     */
    player (prm) {
        try {
            return this.confmng("player", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * initialize parameter setter/getter
     * 
     * @param (object) initialize parameter for youtube-player module
     * @return (object) initialize parameter
     * @type parameter
     */
    initParam (prm) {
        try {
            return this.confmng("initParam", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
