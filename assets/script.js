const btnAdcionar = document.getElementById("adicionar-tarefa");

btnAdcionar.addEventListener("click", function () {
  const inputTask = document.getElementById("nova-tarefa").value;

  if (inputTask.trim() !== "") {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const spanEdit = document.createElement("span");
    const li = document.createElement("li");

    document.getElementById("alert").innerHTML = "";
    li.style.background = "#3c3c47";
    document.getElementById("lista-tarefas").appendChild(li);

    li.textContent = inputTask;
    li.style.listStyle = "none";
    li.classList.add(
      "col-12",
      "py-0",
      "ps-1",
      "m-0",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "text-white"
    );
    li.appendChild(div);
    div.appendChild(spanEdit);
    div.appendChild(span);
    spanEdit.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'> <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/> <path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'/></svg>";
    span.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'><path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0'/></svg></i>";
    span.style.background = "#e64765";
    span.classList.add("fechar", "m-0", "py-1", "px-2");
    spanEdit.classList.add("editar", "m-0", "p-1", "px-2");
    li.classList.add("itemLista");

    spanEdit.addEventListener("mouseover", function () {
      spanEdit.style.background = "#4641a7";
    });

    spanEdit.addEventListener("mouseout", function () {
      spanEdit.style.background = "";
    });


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
