import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { constructErrorResponse, constructSuccessResponse } from '../common/wrappers';
import { StateDocument } from './models/state.model';
import { LanguageDocument } from './models/language.model';
import { CategoryDocument } from './models/category.model';
import { UserType } from 'src/common/enums';

@Injectable()
export class GeneralService {
  constructor(
    @InjectModel('Language') private readonly languageModel: Model<LanguageDocument>,
    @InjectModel('Category') private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel('State') private readonly stateModel: Model<StateDocument>,
  ) { }

  async createLanguage(data: any): Promise<any> {
    try {
      const createdLanguage = new this.languageModel(data);
      const response = await createdLanguage.save();
      return constructSuccessResponse(response, 'Language created successfully');
    } catch (error) {
      return error;
    }
  }

  async findLanguages(_id?: any): Promise<any> {
    const response = await this.languageModel.find();
    return constructSuccessResponse(response, 'Languages fetched successfully');

  }

  async createCategory(data: any): Promise<any> {
    try {
      let states = [];
      if (data.states && data.states.length) {
        for (const state of data.states) {
          const stateResponse = await this.stateModel.findOne({ _id: state });
          if (stateResponse) {
            states.push(state);
          }
        }
      }

      const createdCategory = new this.categoryModel({ ...data, states });
      const response = await createdCategory.save();
      return constructSuccessResponse(response, 'Category created successfully');
    } catch (error) {
      return error;
    }
  }

  async findCategories(userType): Promise<any> {

    const criteria: any = {};
    if (userType != null && userType === UserType.BUSINESS) {
      criteria.isBusiness = true
    }
    if (userType != null && userType === UserType.INDIVIDUAL) {
      criteria.isIndividual = true;
    }
    const categories: any = await this.categoryModel.find(criteria).select('-states');
    return constructSuccessResponse(categories, 'Categories fetched successfully');
  }

  async findCategoryById(id?: string): Promise<any> {
    const categories: any = await this.categoryModel.findById(id).populate('states');
    return constructSuccessResponse(categories, 'Category fetched successfully');
  }

  async createState(data: any): Promise<any> {
    try {
      const createdState = new this.stateModel(data);
      const response = await createdState.save();
      return constructSuccessResponse(response, 'State created successfully');
    } catch (error) {
      return error;
    }
  }

  async getState(): Promise<any> {
    try {
      const createdState = await this.stateModel.find();
      return constructSuccessResponse(createdState, 'States fetched successfully');
    } catch (error) {
      return error;
    }
  }
}
