const malX = {
    title: 'The autobiography of Malcolm X',
    author: 'Alex haley & Malcolm X',
    released: 1 / 01 / 1968,
    synopsis: 'Celebrated and vilified the world over for his courageous but bitter fight to gain for millions of black men and women the equality and respect denied them by their white neighbours, Malcolm X inspired as many people in the United States as he caused to fear him.',
    read: true

}

const harryP = {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J K Rowling',
    released: 26 / 06 / 1997,
    synopsis: 'Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.',
    read: false
}

// Recipes

const frCheeseCake = {
    recipeTitle: 'Fererro Roche Cheesecake',
    servings: 6,
    ingredients: ['Hobnob biscuits, double cream, cheese spred, chocolate spred, crushed hazelnuts, unsalted butter ']
    , directions: ['I forgot the directions so go online and search for them, a good developer knows how to use google'],
    letsCook: function () {
        document.write(`Lets cook ${this.recipeTitle} <br>`)
    }
}
// frCheeseCake.letsCook();
// document.write(`${frCheeseCake.recipeTitle}  '<br>'`)
// document.write(frCheeseCake['servings'] + '<br>')
// document.write('Ingredients:' + '<br>')
// for (i = 0; i < frCheeseCake.ingredients.length; i++){
//     document.write(`- ${frCheeseCake.ingredients[i]} <br>`)
// }
// document.write('Directions:' + '<br>')
// for (i = 0; i < frCheeseCake.directions.length; i++){
//     document.write(`${i + 1} - ${frCheeseCake.directions[i]} <br>`)
// }
// frCheeseCake.letsCook()

// let newDiv = document.getElementsByClassName('test')[0]
// newDiv.style.backgroundColor = 'purple';

// document.createElement('p');
// document.append('div')

// let newB = document.getElementById('btn');
// newB.addEventListener('mouseover', function (event) {
//     alert('Dont click me?')
// });

// let nLink = document.getElementById('linky');
// nLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     alert('Crap link');

// });