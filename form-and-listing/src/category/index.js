import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '.././configureStore';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

class Category extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <CategoryForm />
          <CategoryList />
        </div>
      </Provider>
    )
  }
}

export default Category;