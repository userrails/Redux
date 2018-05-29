import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

class Category extends Component {
  render () {
    return (
        <div>
          <CategoryForm />
          <CategoryList />
        </div>
    )
  }
}

export default Category;
