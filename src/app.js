import { showAlert } from './messages'
import './styles.scss'
import $ from 'jquery'
import { v4 } from 'uuid' 

document.getElementById("btn-alert")
  .addEventListener('click', showAlert)

  $('#btn-jq').click(() => alert(`Click with jquery: ${v4()}`))