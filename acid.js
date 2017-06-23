events.push = function(e) {
  console.log("===> Building " + e.repo.cloneURL + " " + e.commit);

  var node = new Job("node-runner")
  node.image = "technosophos/acid-node:latest"
  node.tasks = [
    "cd /src/hello",
    "npm install",
    "node index.js"
  ]
  node.run()
}
