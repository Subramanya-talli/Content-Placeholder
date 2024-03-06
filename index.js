const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const Name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_text = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData()
{
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww" alt="header-image">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/3.jpg" alt="author-image">'
    Name.innerHTML = 'John Doe';
    date.innerHTML  = "March 5, 2004";


    animated_bgs.forEach( bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach( bg => bg.classList.remove('animated-bg-text'))

}