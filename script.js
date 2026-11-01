let myData
let img;

async function setup(){
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 2000);
    myData = await loadJSON('movies.json')
    console.log(myData)
    // angleMode(DEGREES);

    img = await loadImage('assets/IMG_7152.heic');

    background(50);
}

// async function setup() {
//   // Load the image.
//   img = await loadImage('/assets/IMG_7152.heic');


//   background(50);

//   // Draw the image.
//   image(img, 33, 1000, 400, 200)
// }


function draw(){
    background("rgb(213, 162, 67)")
    for(let i = 0; i < myData.length; i++){
        let movie = myData[i]
        let x = (i+1) * 100
        let y = height/2
        // let angle = radians(10);
        
        
        

        // stroke("#0a0a0a")
        // strokeWeight(0.5)
        // fill("rgba(151, 2, 109, 0.99)")
        // // rotate(angleMode(0))
        // rotate(QUARTER_PI/170)
        // translate(x, y)

        //"primetime"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(151, 2, 109, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(100, 150)
        beginShape()
        for (let j = 0; j < 300; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()


        //"halloween 2018"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(46, 135, 125, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(733, 277)
        beginShape()
        for (let j = 0; j < 170; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"other mommy"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(151, 2, 109, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(330, 350)
        beginShape()
        for (let j = 0; j < 100; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"carol"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(46, 135, 125, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(1290, 145)
        beginShape()
        for (let j = 0; j < 300; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"halloween II"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(151, 2, 109, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(788, 210)
        beginShape()
        for (let j = 0; j < 238; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"poltergeist"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(46, 135, 125, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(1325, 145)
        beginShape()
        for (let j = 0; j < 300; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"rosemary's baby"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(151, 2, 109, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(1020, 277)
        beginShape()
        for (let j = 0; j < 170; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        //"you can see everything"
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        fill("rgba(151, 2, 109, 0.99)")
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(1400, 145)
        beginShape()
        for (let j = 0; j < 300; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()


        stroke("rgb(54, 52, 52)");
        strokeWeight(2);
        line(50, 450, 1450, 450)

        stroke("rgb(54, 52, 52)")
        strokeWeight(0.5)
        // text('≥ 4 weeks', 50, 465);
        // text('≤ 1 week', 1403, 465);
        fill("rgb(54, 52, 52)")
        circle(36, 450, 15)
        rect(1457, 442, 15, 15)
        // rotate(QUARTER_PI/10)
        // rotate(PI/2)
        text('PT', 90, 465)
        text('OM', 320, 465)
        text('HW', 720, 465)
        text('HW2', 780, 465)
        text('RB', 1009, 465)
        text('CRL', 1278, 465)
        text('PGT', 1318, 465)
        text('YCSE', 1390, 465)

        // legend
        stroke("#020202")
        text('a month of movies', 36, 525)
        text('LEGEND', 36, 600)

        circle(36, 625, 15)
        text("=  watched 4 weeks ago", 60, 627)

        rect(33, 645, 15, 15)
        text("=  watched less than a week ago", 60, 653)

        text('PT', 33, 679)
        text("=  Primetime (2026)", 70, 679)

        text('OM', 33, 705)
        text("=  Other Mommy (2026", 70, 705)

        text('HW', 33, 731)
        text("=  Halloween (2018)", 70, 731)

        text('HW2', 33, 757)
        text("=  Halloween II (1981)", 70, 757)

        text('RB', 33, 783)
        text("=  Rosemary's Baby (1968)", 70, 783)

        text('CRL', 33, 809)
        text("=  Carol (2015)", 70, 809)

        text('PGT', 33, 835)
        text("=  Poltergeist (1982)", 70, 835)

        text('YCSE', 33, 861)
        text("=  You Can See Everything (2026)", 70, 861)


        stroke("rgb(54, 52, 52)");
        strokeWeight(2);
        line(500, 870, 950, 870)

        stroke("#020202")
        strokeWeight(0.5)
        text("how much i enjoyed the movie", 500, 920)

        text("0", 500, 890)
        text("1", 585, 890)
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(585, 806)
        beginShape()
        for (let j = 0; j < 50; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        text("2", 670, 890)
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(670, 758)
        beginShape()
        for (let j = 0; j < 100; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        text("3", 765, 890)
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(765, 687)
        beginShape()
        for (let j = 0; j < 170; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        text("4", 858, 890)
        push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(858, 620)
        beginShape()
        for (let j = 0; j < 238; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        text("5", 946, 890)
         push()
        stroke("#0a0a0a")
        strokeWeight(0.5)
        // rotate(angleMode(0))
        rotate(QUARTER_PI/170)
        translate(956, 558)
        beginShape()
        for (let j = 0; j < 300; j+=2){
            vertex(sin(j * 0.4)*10, j)
        }
        endShape()
        pop()

        fill("rgba(151, 2, 109, 0.99)")
        rect(33, 887, 20, 10)
        text("=  first watch", 70, 895)

        fill("rgba(46, 135, 125, 0.99)")
        rect(33, 913, 20, 10)
        text("=  rewatch", 70, 923)

        image(img, 33, 1000, 400, 300);




        // translate(width / 2, height / 2);
        // // Rotate the canvas
        // rotate(angle);
        // Draw the text
        

        // rotate(QUARTER_PI/170)
        // text('within 4 weeks', 50, 465)
        // rotate(QUARTER_PI/170)
        // text('within 1 week', 1432, 465);

        // stroke("#0a0a0a")
        // strokeWeight(0.5)
        // fill("rgba(151, 2, 109, 0.99)")
        // // rotate(angleMode(0))
        // rotate(QUARTER_PI/170)
        // translate(100, 400)
        // beginShape()
        // for (let j = 0; j < 50; j+=2){
        //     vertex(sin(j * 0.4)*3, j)
        // }
        // endShape()
        // pop()



        // stroke("rgba(6, 6, 6, 0)")
        // strokeWeight(1)
        // fill("rgb(7, 7, 7)")
        // rect(x, y, 55, 55)

        
        // line(x, y, 45, 45)
    }
}