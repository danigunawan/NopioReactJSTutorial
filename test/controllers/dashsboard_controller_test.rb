require 'test_helper'

class DashsboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashsboard_index_url
    assert_response :success
  end

end
