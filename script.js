const btnAdcionar = document.getElementById("adicionar-tarefa");

btnAdcionar.addEventListener("click", function () {
  const inputTask = document.getElementById("nova-tarefa").value;

  if (inputTask.trim() !== "") {
    const span = document.createElement("span");
    const li = document.createElement("li");

    li.style.background = "#c3c3c3";

    document.getElementById("lista-tarefas").appendChild(li);

    li.textContent = inputTask;
    li.style.listStyle = "none";
    li.appendChild(span);
    span.textContent = "X";
    span.style.background = "#e64765";
    span.classList.add("fechar");

    span.addEventListener("click", function () {
      document.getElementById("lista-tarefas").removeChild(li);
    });

    span.addEventListener("mouseover", function () {
      span.style.background = "#0086c8";
    });
    span.addEventListener("mouseout", function () {
      span.style.background = "#e64765";
    });

    li.addEventListener("click", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        li.style.background = "#c3c3c3";
      } else {
        li.style.textDecoration = "line-through";
        li.style.background = "#4b0066";
      }
    });

    li.addEventListener("mouseover", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.background = "#4b0066";
      } else {
        li.style.background = "#e64765";
      }
    });
    li.addEventListener("mouseout", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.background = "#4b0066";
      } else {
        li.style.background = "#c3c3c3";
      }
    });
  } else {
    document.getElementById("alert").innerHTML = "Por favor, preencha o campo";
    document.getElementById("alert").style.color = "#db4c34";
  }
});
