events.push = function(e) {
  console.log("===> Building " + project.repo.cloneURL + " " + e.commit);

  var node = new Job("node-runner")
  node.image = "acidic.azurecr.io/acid-node"
  node.tasks = [
    "cd /src/hello",
    "npm install",
    "node index.js"
  ]
  node.run()
}
