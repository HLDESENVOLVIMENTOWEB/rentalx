import fs from "fs";
import csvParse from 'csv-parse';
import { ICategoriesRepositories } from "../../repositories/ICategoriesRepositories";

interface IImportCategories{
    name:string;
    description: string;
}

class ImportCategoryUseCase{
    constructor(private categoryRepository: ICategoriesRepositories){}
       
       laodCategories(file:Express.Multer.File): Promise<IImportCategories[]>{

            return new Promise((resolve, reject)  => {
                const strem = fs.createReadStream(file.path)
            const categories: IImportCategories[] = [];

            const parseFile = csvParse();
    
            strem.pipe(parseFile)
    
            parseFile.on("data", async (line) => {
                const [ name, description ] = line;
                categories.push({
                    name,
                    description
                })
            }).on("end", ()=>{
                resolve(categories)
            }).on("error", (err)=>{
                reject(err)
            })

            })
        }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.laodCategories(file);          
      
    }

}

export { ImportCategoryUseCase }