/**
queues tools
*/
function Queue() {
  // block：Set whether to manually start executing tasks from the task queue
  // only: Whether it is a popup, clear the popup queue, and do not allow to insert pop-ups... Once you have only, the block is invalid
  // this['queues']=[],this['block']=false,this['only']=false;
  this['queues'] = []
  this['block'] = false
  this['only'] = false
}
/**
 * func：Method to execute
 * params：Parameters to execute
 * block：Whether you need to invoke the pop method separately for activation
 * order：Priority of the frame
 */
Queue.prototype.push = function ({ func, params, block, order }) {
  if (block) {
    this.block = true
  }
  if (!this.only) this.queues.push({ func, params, order })
  this.queues.sort(function (a, b) {
    return b.order - a.order
  })
  // if(!this.block){
  //     this.pop();
  // }
}

/**
 * Add a screen bully task to the queue
 */
Queue.prototype.pushOnly = function ({ func, params, block }) {
  this.only = true
  this.block = block
  this.clear()
  this.queues.unshift({ func, params })
  if (!this.block) {
    this.pop()
  }
}

/**
    pop out the last one in the queue and execute it. If you want to block execution, you can return false to block the queue
*/
Queue.prototype.pop = function () {
  if (this.queues.length == 0) {
    this.init()
    return
  }
  let obj = this.queues.shift()

  if (obj.func) {
    // console.log('i pop a task',obj.func);
    let func = obj.func
    let params = obj.params
    func(params)
  }
}
Queue.prototype.clear = function () {
  this.queues = []
}
Queue.prototype.init = function () {
  this.clear()
  this.queues = []
  this.block = false
}
export default new Queue()
