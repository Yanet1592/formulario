<script>
    const body = document.body;
    const form = document.querySelector("form");

  document.querySelector("button[type='submit']").addEventListener("click", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    alert("Por favor, complete todos los campos correctamente.");
    }
  });

  document.querySelectorAll("button[type='button']")[0].addEventListener("click", () => {
        body.classList.remove("alto-contraste");
  });

  document.querySelectorAll("button[type='button']")[1].addEventListener("click", () => {
        body.classList.add("alto-contraste");
  });
</script>