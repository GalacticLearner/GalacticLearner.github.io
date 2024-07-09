var input = document.getElementById("search");
input.addEventListener("keypress", function(event)
{
  if (event.key === "Enter")
  {
    search(document.getElementById("search").value);
  }
});

function search(query)
{
    let books = document.getElementsByTagName("h1");

    for (i = 0; i < books.length; i++)
    {
        if (query.toUpperCase().trim() == books[i].textContent.toUpperCase().trim())
        {
            books[i].scrollIntoView();
        }
    }
}

