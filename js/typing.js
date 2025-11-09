    const myabout = document.getElementById('myabout');
    const speed = 10;
    let i = 0;
    const text = `Hi! I’m Quekeneth S. Lacanaria, but you can call me Keneth. I’m a Computer Engineering graduate from Bestlink College of the Philippines with a strong passion for web development. For me, coding isn’t just a job it’s a hobby that allows me to be creative and innovative. I enjoy building and designing websites, from moving divs to crafting beautiful layouts and interactive user experiences. I also love solving whether it’s debugging code, improving functionality, or finding smarter ways to bring ideas to life. It gives me great satisfaction when I achieve the design I envision or successfully solve a problem that users might encounter. In addition, I enjoy connecting designs to databases that can input, display, update, and delete information. Learning new tech stacks and technologies always excites me, as it helps me grow and stay up to date in this fast-evolving field. I’m also teachable and highly collaborative, always eager to learn from others and contribute to a team’s success. My goal is to continuously improve my skills and help the company grow through innovation, dedication, and quality work.`;


    function typing(){

        if(i >= text.length){

            return;
        }
        const type = text[i++];
        console.log(type);
        myabout.appendChild(document.createTextNode(type));
        setTimeout(typing, speed);

    }

    setTimeout(typing, 500);

