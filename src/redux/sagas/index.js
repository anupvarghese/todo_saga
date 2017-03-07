import { watchCreateToDo } from './watcher_saga';

export default function* rootSaga() {
  yield [
    watchCreateToDo(),
  ]
}