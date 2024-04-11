/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'
import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}


const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()
  return (
    <Link
    href="/products"
    className={classes.card}
    style={{ backgroundImage: `url(${media.url})` }}
    onClick={() => setCategoryFilters([category.id])}
  >
    <p className={classes.title}>{category.title}</p>
  </Link>
  )
}

export default CategoryCard