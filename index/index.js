let url = 'https://vast-depths-87306.herokuapp.com/todos'
let body = document.querySelector('body')

axios.get(url)
    .then(res => {
        if (res.status == 200 || res.status == 201) {
            reload(res.data.data)
            console.log(res.data.data);
        }
    })

function reload(arr) {
    let cent = document.createElement('div')
    let text = document.createElement('p')

    cent.classList.add('centre')
    text.classList.add('Facebook')

    text.innerHTML = 'Facebook'
    cent.append(text)

    let father = document.createElement('div')
    father.classList.add('father')

    father.innerHTML = ''

    for (let item of arr) {
        father.innerHTML += `
        <div class="box">
            <p class="p_one">${item.title}</p>
            <p class="p_two">id:${item._id}</p>
            <p class=" p_three">${item.time}</p>
            <a href='../about/about.html#${item._id}'>
            <button class="butt">Подробнее</button>
            </a>
        </div>
       `
        body.append(cent, father)
    }

    let btns = document.querySelectorAll('.butt')
    console.log(btns);
}




