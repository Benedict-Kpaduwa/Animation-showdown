let app;

window.onload = function(){
    app = new PIXI.Application(
        {
            transparent: false,
            antialias: true,
        }
    );

    var size = [1366, 657];
    var ratio = size[0] / size[1];
    app.renderer.resize(size[0], size[1]);
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;

    document.body.appendChild(app.view);

    resize();

    /* Responsive Screen Funtion */
    function resize() {
        if (window.innerWidth / window.innerHeight >= ratio) {
            var w = window.innerHeight * ratio;
            var h = window.innerHeight;
        } else {
            var w = window.innerWidth;
            var h = window.innerWidth / ratio;
        }
        app.renderer.view.style.width = w + 'px';
        app.renderer.view.style.height = h + 'px';
    }
    window.onresize = resize;

    const loader = new PIXI.Loader();

    loader
        .add("images/spritesheet1-0.json")
        .add("images/spritesheet1-1.json")
        .load(setup);

    function setup(){
        /* the resources hash provided by the loader */
        let resources = loader.resources;

        let sheet = resources["images/spritesheet1-0.json"];
        let sheet2 = resources["images/spritesheet1-1.json"];

        const container = new PIXI.Container();
        container.scale.set(0.5);
        container.height = window.innerHeight;
        container.width = window.innerWidth;
        app.stage.addChild(container);

        background = new PIXI.Sprite(sheet.textures["header.png"]);
        background.width = window.innerWidth;
        background.height = window.innerHeight;
        container.addChild(background);

        background2 = new PIXI.Sprite(sheet2.textures["showdown-off.png"]);
        background2.anchor.set(0.5);
        background2.x = app.view.width / 2;
        background2.y = app.view.height / 2;
        container.addChild(background2);

        /* SetTimeout for all the functions */
        setTimeout(vegasslot, 1000);
        setTimeout(s, 1500);
        setTimeout(h, 1700);
        setTimeout(o, 2000);
        setTimeout(w, 2300);
        setTimeout(d, 2600);
        setTimeout(o2, 2900);
        setTimeout(w2, 3100);
        setTimeout(n, 3300);
        setTimeout(mustdrop, 3500);

        /* Timeout for the bolt function */
        setTimeout(boltoff, 2000);
        setTimeout(bolt, 2000);

        /* SetInterval for the flicker on the bolt icon */
        setInterval(offLight, 10000);
        setInterval(onLight, 10030);
        setInterval(offLight, 10050);
        setInterval(onLight, 10070);

        /* For the casino soundtrack */
        const sound = new Howl({
            src: ["./sound/casino.mp3"]
        });
        sound.play();
        
        /* All functions for the Icons */
        function vegasslot(){
            vegas = new PIXI.Sprite(sheet.textures["vegas@2x.png"]);
            vegas.height = 120;
            vegas.width = 380;
            vegas.x = 330;
            vegas.y = 155;

            slot = new PIXI.Sprite(sheet2.textures["slots@2x.png"]);
            slot.height = 120;
            slot.width = 332;
            slot.x = 710;
            slot.y = 155;

            container.addChild(vegas, slot);
        }

        function s(){
            s = new PIXI.Sprite(sheet.textures["s@2x.png"]);
            s.height = 390;
            s.width = 250;
            s.x = 220;
            s.y = 170;
            container.addChild(s);
        }

        function h(){
            h = new PIXI.Sprite(sheet.textures["h@2x.png"]);
            h.height = 390;
            h.width = 250;
            h.x = 320;
            h.y = 170;
            container.addChild(h);
        }

        function o(){
            o = new PIXI.Sprite(sheet.textures["o-1@2x.png"]);
            o.height = 390;
            o.width = 100;
            o.x = 470;
            o.y = 168;
            container.addChild(o);
        }

        function w(){
            w = new PIXI.Sprite(sheet.textures["w-1@2x.png"]);
            w.height = 380;
            w.width = 219;
            w.x = 518;
            w.y = 162;
            container.addChild(w);
        }

        function d(){
            d = new PIXI.Sprite(sheet.textures["d@2x.png"]);
            d.height = 380;
            d.width = 219;
            d.x = 634;
            d.y = 153;
            container.addChild(d);
        }

        function o2(){
            o2 = new PIXI.Sprite(sheet.textures["o-2@2x.png"]);
            o2.height = 365;
            o2.width = 219;
            o2.x = 717;
            o2.y = 163;
            container.addChild(o2);
        }

        function w2(){
            w2 = new PIXI.Sprite(sheet.textures["w-2@2x.png"]);
            w2.height = 380;
            w2.width = 219;
            w2.x = 800;
            w2.y = 173;
            container.addChild(w2);
        }

        function n(){
            n = new PIXI.Sprite(sheet.textures["n@2x.png"]);
            n.height = 390;
            n.width = 250;
            n.x = 890;
            n.y = 170;
            container.addChild(n);
        }

        function mustdrop(){
            mustdrop = new PIXI.Sprite(sheet2.textures["must_drop.png"]);
            mustdrop.width = 650;
            mustdrop.x = 340;
            mustdrop.y = 340;
            container.addChild(mustdrop);
        }

        function bolt(){
            bolt = new PIXI.Sprite(sheet2.textures["bolt@2x.png"]);
            bolt.width = 170;
            bolt.x = 619;
            bolt.y = 108;
            bolt.height = 200;
            container.addChild(bolt);
        }

        function boltoff(){ 
            boltoff = new PIXI.Sprite(sheet.textures["bolt-off@2x.png"]);
            boltoff.width = 89;
            boltoff.height = 120;
            boltoff.x = 660;
            boltoff.y = 151;
            container.addChild(boltoff);
        }

        function offLight(){
            container.removeChild(bolt);
        }

        function onLight(){
            container.addChild(bolt);
        }
        
    }
}

//Make a function that causes it to flicker then set a setInterval function that calls it every 10s  