/**
 * @param {number} id 
 * @param {string} content 
 * @param {boolean} isDone 
 * @param {string} category 
 * @param {string[]} tags 
 */
const Todo = (id, content, isDone, category, tags) => {}

/**
 * @param {string} content 
 */
const create = (content) => {}

/**
 * @param {number} id 
 */
const read = (id) => {}

/**
 * @param {number} id
 * @param {Object} payload
 * @param {string} payload.content
 * @param {boolean} payload.isDone
 * @param {string} payload.category
 * @param {string[]} payload.tags
 */
const update = (id, payload) => {}


/**
 * 
 * @param {number} id 
 */
const deleteTodo = (id) => {}

    // 모든 할 일을 제거할 수 있다.
    // 특정 할 일의 특정 태그를 삭제할 수 있다.
    // 특정 할 일의 모든 태그를 제거할 수 있다.
