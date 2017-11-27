import { setVisiblityFilter } from "../actions";
import {connect} from "react-redux";
import Link from "../components/Link"

const mapStateToProps = (state,ownProps) =>{
    return{
        active : ownProps.filter===state.VisiblityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
          console.log("==========tedt=====================");
        dispatch(setVisiblityFilter(ownProps.filter))
      }
    }
  }

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink

