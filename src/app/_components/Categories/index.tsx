/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/namespace */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react'
import classes from "./index.module.scss"
import Link from 'next/link'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

const Categoriess = ({ categories }: { categories: Category[] }) => {
  return (
   <section className={classes.container}>
    <div className='classes.titleWrapper'>
    <h3>Shop By Categories</h3>
    <Link href={"/products"}>Show All</Link>
    </div>

    <div className={classes.list}>
    {categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
    </div>

   </section>
  )
}

export default Categoriess