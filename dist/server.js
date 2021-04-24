const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const Logger_1 = require('./utils/Logger');
const app_1 = __importDefault(require('./app'));

app_1.default.listen(3333, function () {
  Logger_1.log('🚀  Server started on port 3333!');
});
