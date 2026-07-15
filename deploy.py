import requests
import sys
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

if len(sys.argv) < 2:
    print("用法: python deploy.py <GitHub Personal Access Token>")
    sys.exit(1)

token = sys.argv[1]
headers = {
    "Authorization": f"token {token}",
    "Accept": "application/vnd.github.v3+json"
}

data = {
    "source": {
        "branch": "main",
        "path": "/"
    }
}

response = requests.post(
    "https://api.github.com/repos/guyue-maple1314/sdu_site/pages",
    headers=headers,
    json=data,
    verify=False
)

print(f"Status: {response.status_code}")
print(f"Response: {response.text}")

if response.status_code == 201:
    print("\n✅ GitHub Pages 已启用！")
    print("访问链接: https://guyue-maple1314.github.io/sdu_site/")
    print("请等待1-5分钟后访问")
elif response.status_code == 200:
    print("\n✅ GitHub Pages 已更新！")
    print("访问链接: https://guyue-maple1314.github.io/sdu_site/")
else:
    print("\n❌ 启用失败，请检查Token权限或手动操作")
