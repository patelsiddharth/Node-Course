const greeting = (name = 'User') => {
    console.log(`Hello ${name}`);
}

greeting('Siddharth');
greeting();

const transaction = (type, {label = 'No-Label', stock = 0} = {}) => {
    console.log(type, label, stock);
}

transaction('order');

transaction('order', {label : 'Book'});

transaction('order', {stock : 100});

transaction('order', {label : 'Book', stock : 100});