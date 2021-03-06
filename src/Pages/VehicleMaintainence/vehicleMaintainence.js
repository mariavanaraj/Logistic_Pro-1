/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
  CFormFloating,
  CFormTextarea,
} from '@coreui/react'

import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useFormValidate'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'

const VehicleMaintainence = () => {
  const [outSide, setoutSide] = useState(false)
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  // document.title=('Vehicle Maintainence');

  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3" onSubmit={'handleSubmit'}>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle No*</CFormLabel>

                  <CFormInput size="sm" id="vNum"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                  <CFormSelect size="sm" name="dName" id='dName' className="">
                    <option  hidden>
                      Select ...
                    </option>
                    <option value="inHouse" onClick={() => setoutSide(false)}>
                      Kumar
                    </option>
                    <option value="outSide" onClick={() => setoutSide(true)}>
                      Raj
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="maintenenceType">
                    Maintenance Type *{' '}
                    {errors.vehicleType && (
                      <span className="help text-danger">{errors.vehicleType}</span>
                    )}
                  </CFormLabel>

                  <CFormSelect size="sm" name="maintenenceType" id='maintenenceType' className="">
                    <option  hidden>
                      Select Maintenance Type
                    </option>
                    <option value="scheduled">Scheduled Maintenance</option>
                    <option value="breakDown">Break Down Maintnenence</option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="maintenenceBy">Maintenance By *</CFormLabel>
                  <CFormSelect size="sm" name="maintenenceBy" id='maintenenceBy' className="">
                    <option  hidden>
                      Select Maintenance By
                    </option>
                    <option value="inHouse" onClick={() => setoutSide(false)}>
                      Inhouse
                    </option>
                    <option value="outSide" onClick={() => setoutSide(true)}>
                      Outside
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="workOrder">Work Order *</CFormLabel>
                  <CFormSelect size="sm" name="workOrder" id='workOrder' className="">
                    <option  hidden>
                      Select...
                    </option>
                    <option value="inHouse" onClick={() => setoutSide(false)}>
                      Select-LP
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="vendorName">Vendor Name *</CFormLabel>
                  <CFormSelect size="sm" name="vendorName" id='vendorName' className="">

                    <option  hidden>
                      Select...
                    </option>
                    <option  onClick={() => setoutSide(false)}>
                      Select-LP
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="MaintenanceStart">Maintainence Start Date& Time*</CFormLabel>

                  <CFormInput size="sm" id="MaintenanceStart" type="datetime-local" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="MaintenanceEnd">Maintainence End Date& Time*</CFormLabel>

                  <CFormInput size="sm" id="MaintenanceEnd" type="datetime-local" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                  <CFormTextarea id="remarks" rows="1"></CFormTextarea>
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  <CButton
                    md={6}
                    size="sm"
                    color="primary"
                    disabled=""
                    className="text-white"
                    type="submit"
                  >
                   <Link className="text-white" to="/VMain">
                   Previous
                   </Link>
                  </CButton>
                </CCol>

                <CCol
                  className=""
                  xs={12}
                  sm={12}
                  md={5}
                  style={{ display: 'flex-sm', justifyContent: 'right' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Force End
                  </CButton>
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Maintenence End
                  </CButton>
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Maintenence Start
                  </CButton>

                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={!outSide}
                  >
                    Gate Out
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
    </>
  )
}

export default VehicleMaintainence
