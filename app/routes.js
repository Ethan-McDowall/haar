//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/template-or-role', function (req, res) {

    let templateOrRole = req.session.data['select-a-template-or-from-all-roles']
  
    if (templateOrRole === 'omu-case-administrator') {
      res.redirect('/version-1/select-roles-from-a-template.html')
    } 
    else if (templateOrRole === 'omu-manager') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else if (templateOrRole === 'omu-prison-offender-manager') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else if (templateOrRole === 'reception-officer') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else if (templateOrRole === 'security-administrator') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else if (templateOrRole === 'security-manager') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else if (templateOrRole === 'wing-officer') {
        res.redirect('/version-1/select-roles-from-a-template.html')
    }
    else {
        res.redirect('version-1/all-roles')
    }
  })