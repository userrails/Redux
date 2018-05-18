import React, {Component} from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {
  render () {
    console.log('5.propstest-list', this.props.categories);
    if (this.props.categories) {
      return (
        <ul>
          {
            this.props.categories.map(category => (
              <li key={category.id}>Category -> {category.id}--{category.title}</li>
            ))};
        </ul>
      );
    }
    else {
      return (
        <div>
          <h2>No items found on this list.</h2>
        </div>
        )
    }
  }
}

const mapStateToProps = state => {
  console.log('4. state-listings', state)
  return {categories: state.categoryReducer.categories}
}

export default connect(mapStateToProps)(CategoryList);