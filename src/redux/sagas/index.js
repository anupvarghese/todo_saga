import { watchCreateToDo, watchRemoveTodo } from './watcher_saga';

export default function* rootSaga() {
  yield [
    watchCreateToDo(),
    watchRemoveTodo(),
  ]
};