function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node');
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
  return current
}
