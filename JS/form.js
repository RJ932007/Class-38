class Form{
    constructor(){
        this.input=createInput("Name");
        this.play=createButton("Play");
        this.reset=createButton("Reset");
        this.title=createElement('h1');
        this.greeting=createElement('h3');
    }
    hide(){
        this.play.hide();
        this.title.hide();
        this.input.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-100,50);
        this.play.position(displayWidth/2-100,displayHeight/2+50);
        this.reset.position(displayWidth-100,100);
        this.input.position(displayWidth/2-100,displayHeight/2-50);

        this.play.mousePressed(()=>{

            this.input.hide();
            this.play.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-100,displayHeight/2-80);


        });

        this.reset.mousePressed(()=>{

            game.updateState(0);
            player.updateCount(0);

        });
    }
}