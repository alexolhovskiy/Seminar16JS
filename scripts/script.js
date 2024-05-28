console.log(data);

const newData = JSON.parse(data);
console.log(newData);

const divItems = document.querySelector('.items');

newData.forEach(element => {
    divItems.insertAdjacentHTML('beforeEnd',
        `<div class="b_item">
                <img class="b_i_img" src=${element.img} alt="3" />

                <div class="my_hidden">
                    <div class="center_hidden">
                        <img src=${element.img_hidden} alt="vector" />
                        <div class="text_hidden">
                            <p>${element.text_hidden}</p>
                        </div>
                    </div>
                </div>
                <p class="b_i_t_1">${element.header}</p>
                <p class="b_i_t_2">${element.description}</p>
                <p class="b_i_t_3">$${element.price}</p>
            </div>`
    )
});