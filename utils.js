export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function farmAnimalLi(animals) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `/data.js/?id=${animals.id}`;
    li.append(a);
    return li;
}
