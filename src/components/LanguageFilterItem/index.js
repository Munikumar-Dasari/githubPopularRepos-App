// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageItemDetails, updateLanguageItem, isActive} = props
  const {id, language} = eachLanguageItemDetails

  const className = isActive
    ? 'language-button active-button'
    : 'language-button'

  const onClickRepository = () => {
    updateLanguageItem(id)
  }

  return (
    <button type="button" className={className} onClick={onClickRepository}>
      <li className="language-item">{language}</li>
    </button>
  )
}

export default LanguageFilterItem
