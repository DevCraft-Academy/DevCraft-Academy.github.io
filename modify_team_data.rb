require 'yaml'

employee_data = YAML.load_file('C:\dev_projekte_git\Helmcraft_GmbH\devcraft_landingpage\landingpage\_data\teammembers.yml')

employee_data.each do |employee|
  employee['image'] = "/assets/images/#{File.basename(employee['image'])}"
end

File.open('C:\dev_projekte_git\Helmcraft_GmbH\devcraft_landingpage\landingpage\_data\teammembers.yml', 'w') { |file| file.write(YAML.dump(employee_data))}