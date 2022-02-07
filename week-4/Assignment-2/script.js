function ajax(src, callback) {
    // your code here
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const result = JSON.parse(this.responseText)
                console.log(result);
                callback(result)
            }
        }
    }
    xmlhttp.open('GET', src)
    xmlhttp.send()
}

function render(data) {
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or
    // something alike
    const root = document.getElementById('root')
    data.forEach((product) => {
        const demo1 = document.createElement('div')
        const demo2 = document.createElement('div')
        const demo3 = document.createElement('div')
        demo1.innerText = product.name
        demo2.innerText = product.price
        demo3.innerText = product.description
        root.appendChild(demo1)
        root.appendChild(demo2)
        root.appendChild(demo3)
    })
}

ajax(
    'https://appworks-school.github.io/Remote-Aassigiment-Data/products',
    function (response) {
        render(response)
    }// you should get product information in JSON format and render data in the page
)