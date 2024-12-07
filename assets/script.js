const btnAdcionar = document.getElementById("adicionar-tarefa");

btnAdcionar.addEventListener("click", function () {
  const inputTask = document.getElementById("nova-tarefa").value;

  if (inputTask.trim() !== "") {
    const span = document.createElement("span");
    const li = document.createElement("li");

    document.getElementById("alert").innerHTML = "";
    li.style.background = "#3c3c47";
    document.getElementById("lista-tarefas").appendChild(li);

    li.textContent = inputTask;
    li.style.listStyle = "none";
    li.classList.add("col-12", "py-0", "ps-1", "m-0", "d-flex", "justify-content-between", "align-items-center", "text-white");
    li.appendChild(span);
    span.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'><path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0'/></svg></i>";
    span.style.background = "#e64765";
    span.classList.add("fechar", "m-0", "py-1", "px-2");

    span.addEventListener("click", function () {
      document.getElementById("lista-tarefas").removeChild(li);
    });

    span.addEventListener("mouseover", function () {
      span.style.background = "#E62F52";
    });
    span.addEventListener("mouseout", function () {
      span.style.background = "#e64765";
    });

    li.addEventListener("click", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        li.style.background = "#3c3c47";
      } else {
        li.style.textDecoration = "line-through";
        li.style.background = "#0e0f18";
      }
    });

    li.addEventListener("mouseover", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.background = "#12123B";
      } else {
        li.style.background = "#17182B";
      }
    });
    
    li.addEventListener("mouseout", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.background = "#0e0f18";
      } else {
        li.style.background = "#3c3c47";
      }
    });
  } else {
    document.getElementById("alert").innerHTML = "Por favor, preencha o campo";
    document.getElementById("alert").style.color = "#edff00";
  }
});
