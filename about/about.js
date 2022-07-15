let url = 'https://vast-depths-87306.herokuapp.com/todos'
let body = document.querySelector('body')

axios.get(url)
    .then(res => {
        if (res.status == 200 || res.status == 201) {
            let a = window.location.href.split('#')
            a = a[a.length - 1]

            proverka(res.data.data, a)
        }
    })

function proverka(elem, a) {
    for (let srt of elem) {
        if (srt._id === a) {
            reload(srt)
        }
    }
}

function reload(arr) {
    let cent = document.createElement('div')
    let text = document.createElement('p')

    cent.classList.add('centre')
    text.classList.add('Facebook')

    text.innerHTML = 'About of User'
    cent.append(text)

    let father_two = document.createElement('div')
    father_two.classList.add('father_two')
    let father = document.createElement('div')
    father.classList.add('father')

    father.innerHTML = ''

    father.innerHTML += `
        <div class="box">
        <p class="p_one">${arr.title}</p>
        <p class="p_two">id:${arr._id}</p>
        <p class=" p_three">${arr.time}</p>
        </div>
       `
    body.append(cent, father, father_two)

    father_two.innerHTML = `
    <a href="../index/index.html">
        <button class="btn">На главную</button>
    </a>
    `
}