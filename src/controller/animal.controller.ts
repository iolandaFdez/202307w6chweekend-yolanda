import createDebug from 'debug';
import { AnimaType } from '../entities/animalType.js';
import { Repository } from '../repository/repository_Structure.js';
import { Controller } from './controler.js';
const debug = createDebug('W6E:Controller:NotesController.js');
export class AnimalsController extends Controller<AnimalType> {
  constructor(protected repo: Repository<AnimalType>) {
    super(repo);
    debug('Instantiated');
  }
}