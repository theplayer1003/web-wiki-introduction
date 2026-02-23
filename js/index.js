function getInput() {

    const inputElement = document.getElementById("input1");
    const typped = inputElement.value;

    if (typped === '') {
        alert("댓글을 입력하셔야 합니다.");
        return;
    }

    alert("댓글이 등록되었습니다");

    const ul = document.querySelector(".comment-list");
    const originLi = document.querySelector(".comment-list li");

    const newLi = originLi.cloneNode(true);

    newLi.querySelector(".comment-content").innerText = typped;

    ul.appendChild(newLi);

    inputElement.value = '';
}