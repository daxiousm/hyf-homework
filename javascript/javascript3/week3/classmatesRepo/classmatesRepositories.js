const urls = [
  "https://api.github.com/search/repositories?q=user:nuha90",
  "https://api.github.com/search/repositories?q=user:Elia-git",
  "https://api.github.com/search/repositories?q=user:claudion3",
];

const body = document.querySelector("body");

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((repos) => {
  //console.log(repos);
  repos.forEach((repo) => {
    const ul = document.createElement("ul");
    body.appendChild(ul);

    let li = document.createElement("li");
    li.innerHTML = `${repo.items[0].owner.login}'s repositories`;
    ul.appendChild(li);

    const ul1 = document.createElement("ul");
    const ul2 = document.createElement("ul");
    ul1.innerHTML = `<li>${repo.items[0].full_name}`;
    ul2.innerHTML = `<li> ${repo.items[0].url}`;

    li.appendChild(ul1);
    li.appendChild(ul2);
    console.log(repo.items[0]);
  });
  //console.log("merih", repos[0]);
  //console.log("elias", repos[1]);
  //console.log("jean", repos[2]);
});
