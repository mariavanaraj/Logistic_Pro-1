/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCardBody,
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
  CFormCheck,
  CFormTextarea,
} from '@coreui/react'
import { React, useState, useEffect, useContext } from 'react'
import useForm from 'src/Hooks/useFormValidate'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
import { ParkingView } from '../../API/useGet'
const ParkingYardGate = () => {
  const [hire, setHire] = useState(false)

  const formValues = {
    vType: '',
    vNum: '',
    vCapMTS: '',
    dName: '',
    dNum: '',
    vType: '',
    odoKm: '',
    odoimg: '',
    pName: '',
    vBody: '',
  }

  const {
    values,
    errors,
    handleChange,
    onFocus,
    handleSubmit,
    enableSubmit,
    onBlur,
    onClick,
    onKeyUp,
  } = useForm(login, validate, formValues)

  function login() {
    alert('No Errors CallBack Called')
  }

  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    {
      name: 'VA No',
      selector: (row) => row.VA_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Tripsheet No',
      selector: (row) => row.Tripsheet_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle Type',
      selector: (row) => row.Vehicle_Type,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle No',
      selector: (row) => row.Vehicle_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Driver Name',
      selector: (row) => row.Driver_Name,
      sortable: true,
      center: true,
    },
    {
      name: 'Waiting At',
      selector: (row) => row.Waiting_At,
      sortable: true,
      center: true,
    },
    {
      name: 'Screen Duration',
      selector: (row) => row.Screen_Duration,
      center: true,
    },
    {
      name: ' Overall Duration',
      selector: (row) => row.Overall_Duration,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  const data = [
    {
      id: 1,
      sno: 1,
      VA_No: 12000,
      Tripsheet_No: 102556,
      Vehicle_Type: 'own',
      Vehicle_No: 'TN45AT8417',
      Driver_Name: 'Saravana',
      Waiting_At: <span className="badge rounded-pill bg-info">DI Creation</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Vehicle Insp
        </CButton>
      ),
    },
    {
      id: 2,
      sno: 2,
      VA_No: 12070,
      Tripsheet_No: 102501,
      Vehicle_Type: 'contract',
      Vehicle_No: 'TN54AT8417',
      Driver_Name: 'David',
      Waiting_At: <span className="badge rounded-pill bg-info">Waiting</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate In
        </CButton>
      ),
    },
    {
      id: 3,
      sno: 3,
      VA_No: 12018,
      Tripsheet_No: 102501,
      Vehicle_Type: 'Hire',
      Vehicle_No: 'TN54CT8417',
      Driver_Name: 'Alvin',
      Waiting_At: <span className="badge rounded-pill bg-info">Ts Creation</span>,
      Screen_Duration: '1 Hrs 07 Mins',
      Overall_Duration: '2 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate Out
        </CButton>
      ),
    },
  ]
  useEffect(() => {
    ParkingView()
  }, [])

  return (
    <>
      <CContainer>
        <CCard>
          <CForm className="container p-3" onSubmit={handleSubmit}>
            <CRow className="">
              <CCol md={3}>
                <CFormLabel htmlFor="vType">
                  Vehicle Type*{' '}
                  {errors.vType && <span className="help text-danger">{errors.vType}</span>}
                </CFormLabel>

                <CFormSelect
                  size="sm"
                  name="vType"
                  id="vType"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={handleChange}
                  value={values.vType}
                  className={`${errors.vType && 'is-invalid'}`}
                  aria-label="Small select example"
                >
                  <option hidden selected>
                    Select...
                  </option>
                  <option value="1">Own</option>
                  <option value="1">Contract</option>
                  <option value="3">Hire</option>
                  <option value="4">Party</option>
                </CFormSelect>
              </CCol>
              {values.vType == 1 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">
                    Vehicle Number*
                    {errors.vNum && <span className="help text-danger">{errors.vNum}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vNum"
                    id="vNum"
                    maxLength={10}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(handleChange, onKeyUp)}
                    value={values.vNum || ''}
                    className={`${errors.vNum && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option hidden selected>
                      Select...
                    </option>
                    <option value="1">TN54AT8417</option>
                    <option value="2">TN45AT8417</option>
                  </CFormSelect>
                </CCol>
              )}
              {values.vType == 1 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS*</CFormLabel>
                  <CFormInput size="sm" id="vCap" name="vCap" value={values.vCap} readOnly />
                </CCol>
              )}
              {values.vType == 1 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">
                    Driver Name*{' '}
                    {errors.dName && <span className="help text-danger">{errors.dName}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="dName"
                    id="dName"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dName || ''}
                    className={`${errors.dName && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option hidden selected>
                      Select...
                    </option>
                    <option value="1">Kumar</option>
                    <option value="2">Kannan</option>
                  </CFormSelect>
                </CCol>
              )}
              {values.vType == 1 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dNum">
                    Driver Contact Number*
                    {errors.dNum && <span className="help text-danger">{errors.dNum}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="dNum"
                    maxLength={10}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dNum || ''}
                  />
                </CCol>
              )}
              {values.vType == 1 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="odoKm">
                    Odometer KM*{' '}
                    {errors.odoKm && <span className="help text-danger">{errors.odoKm}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="odoKm"
                    id="odoKm"
                    maxLength={6}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.odoKm || ''}
                  />
                </CCol>
              )}
              {values.vType == 1 && (
                <CCol xs={12} md={3} hidden={hire}>
                  <CFormLabel htmlFor="odoImg">
                    Odometer Photo*{' '}
                    {errors.odoImg && <span className="help text-danger">{errors.odoImg}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    name="odoImg"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.odoImg}
                    className={`${errors.odoImg && 'is-invalid'}`}
                    size="sm"
                    id="odoImg"
                  />
                </CCol>
              )}
              {values.vType == 3 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">
                    Vehicle Number*
                    {errors.vNum && <span className="help text-danger">{errors.vNum}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="vNum"
                    id="vNum"
                    onKeyUp={onKeyUp}
                    maxLength={10}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vNum}
                  />
                </CCol>
              )}
              {values.vType == 3 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">
                    Vehicle Capacity In MTS*{' '}
                    {errors.vCap && <span className="help text-danger">{errors.vCap}</span>}
                  </CFormLabel>
                  <CFormSelect size="sm" name="vCap" className="" aria-label="Small select example">
                    <option hidden>Select...</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="19">19</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </CFormSelect>
                </CCol>
              )}
              {values.vType == 3 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">
                    Driver Name*
                    {errors.dName && <span className="help text-danger">{errors.dName}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="dName"
                    id="dName"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dName}
                  />
                </CCol>
              )}
              {values.vType == 3 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dNum">
                    Driver Contact Number*
                    {errors.dNum && <span className="help text-danger">{errors.dNum}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="dNum"
                    id="dNum"
                    maxLength={10}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dNum}
                  />
                </CCol>
              )}
              {values.vType == 3 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vBody">
                    Vehicle Body*
                    {errors.vBody && <span className="help text-danger">{errors.vBody}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vBody"
                    className=""
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Open</option>
                    <option value="2">Closed</option>
                  </CFormSelect>
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">
                    Vehicle Number*
                    {errors.vNum && <span className="help text-danger">{errors.vNum}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="vNum"
                    id="vNum"
                    maxLength={10}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vNum}
                  />
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="pName">
                    Party Name*
                    {errors.pName && <span className="help text-danger">{errors.pName}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="pName"
                    id="pName"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.pName}
                  />
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCapMts">
                    Vehicle Capacity In MTS*{' '}
                    {errors.vCapMts && <span className="help text-danger">{errors.vCapMts}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vCapMts"
                    id="vCapMts"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="19">19</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </CFormSelect>
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">
                    Driver Name*{' '}
                    {errors.dName && <span className="help text-danger">{errors.dName}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="dName"
                    id="dName"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dName}
                  />
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dNum">
                    Driver Contact Number*{' '}
                    {errors.dNum && <span className="help text-danger">{errors.dNum}</span>}
                  </CFormLabel>
                  <CFormInput
                    size="sm"
                    name="dNum"
                    id="dNum"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.dNum}
                  />
                </CCol>
              )}
              {values.vType == 4 && (
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vBody">
                    Vehicle Body*
                    {errors.vBody && <span className="help text-danger">{errors.vBody}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vBody"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Open</option>
                    <option value="2">Closed</option>
                  </CFormSelect>
                </CCol>
              )}
              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                <CFormTextarea name="remarks" id="remarks" rows="1"></CFormTextarea>
              </CCol>
            </CRow>
            <CRow className="mt-1">
              <CCol
                className="d-md-flex justify-content-end"
                xs={12}
                sm={12}
                md={12}
                // style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <CButton
                  size="sm"
                  color="warning"
                  // disabled={enableSubmit}
                  className="mx-1 text-white"
                  type="submit"
                >
                  Wait OutSide
                </CButton>
                {hire}
                <CButton
                  size="sm"
                  // disabled={enableSubmit}
                  color="warning"
                  className="mx-1 text-white"
                  type="submit"
                >
                  Gate In
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCard>
        <CCard className="mt-3">
          <CContainer className="mt-2">
            <CustomTable columns={columns} data={data} />
          </CContainer>
        </CCard>
      </CContainer>
    </>
  )
}
export default ParkingYardGate
