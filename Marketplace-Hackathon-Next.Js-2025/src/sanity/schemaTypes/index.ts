import { type SchemaTypeDefinition } from 'sanity'

import { productSchema } from './products'
import { categorySchema } from './categories'
import { HeroSection } from './herosection'
import { newsletterSchema } from './newsletter'
import { contactMessage } from './contactmessage'
import { CompanyLogos } from './companylogos'
import { PopularBlogs } from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HeroSection, productSchema, categorySchema,newsletterSchema,contactMessage,CompanyLogos,PopularBlogs],
}
